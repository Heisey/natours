
export interface Props{
  onChange: (value?: string) => void
  hasError: (error: boolean) => void
  className?: string
  name: string
  label: string
  value?: string
}