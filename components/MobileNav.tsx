'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon Logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn('mobilenav-sheet_close', { 'bg-bank-gradient': isActive })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={22}
                          height={22}
                          className={cn({ 'brightness-[3] invert-0': isActive })}
                        />
                        <p
                          className={cn(
                            'text-16 font-semibold text-black-2',
                            isActive && 'text-white'
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
