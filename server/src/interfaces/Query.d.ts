
export interface Query {
  [x: string]: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined;
}