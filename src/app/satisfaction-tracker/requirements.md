
# Narrativa

 Como uma pessoa que precisa ser lembrada do seu proprio progresso uma visão geral da satisfação a respeito de aspectos da vida.
Quero registrar o nivel de satisfação nas avaliações de um aspecto da vida.
 Para que eu tenha um histórico das avaliações

------

avaliação.

* Serviço de Avaliação de Aspectos

```typescript


avaliação {
    + nivel de satisfação
    + anotações
    + data de avaliação
  }

  aspecto {
    + nome
    + detalhes
    + avaliações[avaliação]
  }

  avaliar satisfação do aspecto: {
    = assunto avaliado
  }

  assunto avaliado {
  + assunto da análise de satisfação
  + nível de satisfação
  + data da avaliação
  }

```
