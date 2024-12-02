import type { ProField } from '../../entity'

type SearchConfig = {
  resetText?: string
  submitText?: string
}

export type Submitter = {
  searchConfig?: SearchConfig
}

export type ProFormProps = {
  columns?: ProField[]
  submitter?: Submitter
  onFinish?: (values: any) => Promise<void>
}
