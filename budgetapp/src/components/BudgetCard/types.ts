export type IProps = {
    name: string,
    amount: number,
    maximum: number,
    onAddExpenseClick: () => void,
    gray?: boolean,
}