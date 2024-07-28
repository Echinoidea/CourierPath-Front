import { ThemeToggle } from "@/components/custom/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Separator } from "../ui/separator"
import { AppSelector } from "./app-selector"
import { DatePicker } from "./date-range"
import { cn } from "@/lib/utils"
import React from "react"
import { Avatar } from "../ui/avatar"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

const dashboards: {title: string; href: string; description: string}[] = [
  {
    title: "Earnings Dashboard",
    href: "/dashboard/earnings",
    description:
      "Descriptive statistics on your past earnings"
  },
  {
    title: "Order Insights",
    href: "/dashboard/orders",
    description:
      "Focused analytics on your orders and the types of orders that tend to earn you the most"
  },
  {
    title: "Profit Insights",
    href: "/dashboard/profits",
    description:
      "Make informed decisions to optimize your earnings"
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none h-full">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function NavMenu() {
  return (
    <nav>
        <div className="flex items-center justify-between px-4">
          {/* Left section of the nav */}
          <div className="flex justify-center">

            <div className="hidden md:flex items-center space-x-4 ">
              <p className='text-xl'>CourierPath</p>
              <Separator orientation="vertical" className="h-full "/>
            </div>

            <NavigationMenu className="pl-2">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <NavigationMenuTrigger>Dashboards</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[300px]">
                      {dashboards.map((dashboard) => (
                        <ListItem
                          key={dashboard.title}
                          title={dashboard.title}
                          href={dashboard.href}
                        >
                          {dashboard.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/map" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Map
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/finances" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Finances
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right section of the nav */}
          <div className="hidden md:flex items-center space-x-4 pt-2 pr-2">
            
            <AppSelector/>
            <Avatar className="flex pt-0.5 items-center justify-center border-2">
              <AvatarImage></AvatarImage>
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
            <ThemeToggle/>
          </div>
        </div>
    </nav>
  )
}