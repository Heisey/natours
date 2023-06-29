
import * as I from '../../interfaces'

export class GlobalError {
  private generatedError: Error
  public status!: 'failed';
  public statusCode: number
  public stack?: string
  public errorType: string
  public message: string

  constructor(
    err: any, 
    statusCode?: number
  ) {
    this.generatedError = new Error(err)
    this.status = 'failed'
    this.statusCode = statusCode || 501

    this.errorType = this.generatedError.name || 'unknown error type'
    this.stack = this.generatedError.stack
    this.message = this.generatedError.message
  }

  public get statusReport() {
    const response = {} as I.ErrorResponse

    response.status = this.status
    response.type = this.errorType
    response.message = this.message
    
    if (this.stack) response.stack = this.stack
    
    return response
  }

  public logError = () => console.log(this.statusReport)
}