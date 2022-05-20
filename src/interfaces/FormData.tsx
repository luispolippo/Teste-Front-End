export default interface FormData {
  nome: string,
  dataInicial: Date | string | null,
  dataFinal: Date | string | null,
  infosPropriedade: {
    id: number,
    nome: string,
  },
  cnpj: string,
  laboratorio: {
    id: number,
    nome: string,
  },
  observacoes: string,
}
