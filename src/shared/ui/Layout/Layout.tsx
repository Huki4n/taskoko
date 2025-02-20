import { Nova_Mono } from "next/font/google";
import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";

import s from './Layout.module.scss'
import cn from "classnames";


const novaMono = Nova_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const Layout = ({children}: LayoutProps) => {
  return (
      <div className={cn(s.layout, novaMono.className)}>
        <Header/>
        <div className={s.content}>
          <Sidebar/>
          <main>{children}</main>
        </div>
      </div>
  )
}

interface LayoutProps {
  children: React.ReactNode
}