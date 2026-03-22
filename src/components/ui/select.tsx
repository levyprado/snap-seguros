import * as React from 'react'

import { cn } from '@/lib/utils'
import { ArrowDownIcon } from '@hugeicons/core-free-icons'
import Icon from './icon'

type SelectProps = Omit<React.ComponentProps<'select'>, 'size'> & {
  size?: 'sm' | 'default'
}

function Select({ className, size = 'default', ...props }: SelectProps) {
  return (
    <div
      className={cn(
        'group/native-select relative w-full has-[select:disabled]:opacity-50',
        className,
      )}
      data-slot='native-select-wrapper'
      data-size={size}
    >
      <select
        data-slot='native-select'
        data-size={size}
        className='h-10 w-full min-w-0 appearance-none rounded-lg border bg-white py-1 pr-8 pl-2.5 transition-all outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-red-500 aria-invalid:ring-3 aria-invalid:ring-red-500/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5'
        {...props}
      />
      <Icon
        icon={ArrowDownIcon}
        className='pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none'
        aria-hidden='true'
        data-slot='native-select-icon'
      />
    </div>
  )
}

function SelectOption({ ...props }: React.ComponentProps<'option'>) {
  return <option data-slot='native-select-option' {...props} />
}

function SelectOptGroup({
  className,
  ...props
}: React.ComponentProps<'optgroup'>) {
  return (
    <optgroup
      data-slot='native-select-optgroup'
      className={cn(className)}
      {...props}
    />
  )
}

export { Select, SelectOptGroup, SelectOption }
