import Icon from "../Icon/Icon.component"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { BreadcrumbsProps } from "./types/BreadcrumbsProps.type"
import { APP_BASE_URL } from "@/app/consts/api.consts"
import Link from "next/link"

const Breadcrumbs = ({ crumbs = [] }: BreadcrumbsProps) => {
  return (
    <div className="flex mt-12 md:mt-10 sm:mt-14 lg:px-14 sm:px-10 xs:px-1">
      <Link href={APP_BASE_URL}>
        <div className="flex items-center">
          <Icon iconType="chev" style="-rotate-90 h-5" />
          <span>Pagina de inicio</span>
        </div>
      </Link>
      {crumbs.map((crumb, idx) => (
        <Link href={crumb.path} key={`crumb-${idx}`}>
          <div className="flex items-center">
            <Icon iconType="chev" style="-rotate-90 h-5" />
            <span>{strForDisplay(crumb.label)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Breadcrumbs
