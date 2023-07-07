// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Components = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Components'
  /** The title of the post */
  title: string
  /** The summary of the post */
  excerpt: string
  items?: string[] | undefined
  /** The directory that handles the import of the component */
  file: string
  /** The summary url for every doc */
  root: string
  /** MDX file body */
  body: MDX
  slug: string
  readingTime: json
  headings: json
}

export type GettingStarted = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'GettingStarted'
  /** The title of the post */
  title: string
  /** The summary of the post */
  excerpt: string
  /** The summary url for every doc */
  root: string
  /** MDX file body */
  body: MDX
  slug: string
  readingTime: json
  headings: json
}

export type Hooks = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Hooks'
  /** The title of the post */
  title: string
  /** The summary of the post */
  excerpt: string
  /** The directory that handles the import of the hook. */
  file: string
  /** The summary url for every doc */
  root: string
  /** MDX file body */
  body: MDX
  slug: string
  readingTime: json
  headings: json
}

export type Theme = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Theme'
  /** The title of the post */
  title: string
  /** The summary of the post */
  excerpt: string
  /** The summary url for every doc */
  root: string
  /** MDX file body */
  body: MDX
  slug: string
  readingTime: json
  headings: json
}

export type Utils = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Utils'
  /** The title of the post */
  title: string
  /** The summary of the post */
  excerpt: string
  /** The directory that handles the import of the hook. */
  file: string
  /** The summary url for every doc */
  root: string
  /** MDX file body */
  body: MDX
  slug: string
  readingTime: json
  headings: json
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Components | GettingStarted | Hooks | Theme | Utils
export type DocumentTypeNames = 'Components' | 'GettingStarted' | 'Hooks' | 'Theme' | 'Utils'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allComponents: Components[]
  allHooks: Hooks[]
  allUtils: Utils[]
  allThemes: Theme[]
  allGettingStarteds: GettingStarted[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Components: Components
  GettingStarted: GettingStarted
  Hooks: Hooks
  Theme: Theme
  Utils: Utils
}

export type NestedTypeMap = {

}

 