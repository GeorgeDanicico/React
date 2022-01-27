export type IProps = {
    name: string,
    amount: number,
    maximum: number,
    onAddExpenseClick?: () => void,
    onViewExpensesClick?: () => void,
    gray?: boolean,
    showButtons: boolean,
    nomax?: boolean,
}