"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckedState } from "@radix-ui/react-checkbox"

type Checked = DropdownMenuCheckboxItemProps["checked"]


type AppCheckboxItem = {
  name: string;
  checked: CheckedState | undefined;
  setChecked: React.Dispatch<React.SetStateAction<CheckedState | undefined>>;
}



export function AppSelector() {
  const [showUberEatsBar, setShowUberEatsBar] = React.useState<Checked>(true);
  const [showDoorDashBar, setShowDoorDashBar] = React.useState<Checked>(true);
  const [showGrubHubBar, setShowGrubHubBar] = React.useState<Checked>(true);


  const appCheckboxItems: AppCheckboxItem[] = [
    {
      name: "UberEats",
      checked: showUberEatsBar,
      setChecked: setShowUberEatsBar
    },
    {
      name: "DoorDash",
      checked: showDoorDashBar,
      setChecked: setShowDoorDashBar
    },
    {
      name: "GrubHub",
      checked: showGrubHubBar,
      setChecked: setShowGrubHubBar
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Courier Apps</Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Courier Services</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {appCheckboxItems.map((item: AppCheckboxItem, index: number) => (
          <DropdownMenuCheckboxItem
            checked={item.checked}
            onCheckedChange={item.setChecked}
            onSelect={event => event.preventDefault()}
          >
          {item.name}
        </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
