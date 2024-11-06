type CrumbProps = "label" | "path"

type Crumb = {
  [key in CrumbProps]: string
}

export type BreadcrumbsProps = {
  crumbs?: Crumb[]
}
