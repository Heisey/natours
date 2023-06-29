
export interface Props {
  value?: string
  hasError: (error: boolean) => void
  onChange: (value?: string) => void
  className?: string
  
}
