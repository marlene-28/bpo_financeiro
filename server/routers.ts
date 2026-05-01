import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendMessage: publicProcedure
      .input(z.object({
        nome: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido"),
        telefone: z.string().min(1, "Telefone é obrigatório"),
        mensagem: z.string().min(1, "Mensagem é obrigatória"),
      }))
      .mutation(async ({ input }) => {
        try {
          // Enviar notificação para o proprietário (Marlene)
          const title = `📧 Nova Mensagem de Contato - ${input.nome}`;
          const content = `
**De:** ${input.nome}
**Email:** ${input.email}
**Telefone:** ${input.telefone}

**Mensagem:**
${input.mensagem}
          `.trim();

          await notifyOwner({ title, content });

          return {
            success: true,
            message: "Mensagem enviada com sucesso! Retornarei em breve.",
          };
        } catch (error) {
          console.error("Erro ao enviar mensagem:", error);
          return {
            success: false,
            message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
