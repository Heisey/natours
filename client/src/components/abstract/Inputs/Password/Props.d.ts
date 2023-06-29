
export interface Props {
  value?: string
  onChange: (value?: string) => void
  hasError: (error: boolean) => void
}