import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

const SelectDaysUi = ({ onSelectedOption }: any) => {
  const [days, setDays] = useState<number>(3)

  const decrement = () => setDays((d) => Math.max(1, d - 1))
  const increment = () => setDays((d) => Math.min(30, d + 1))
  const onConfirm = () => onSelectedOption(`${days} Days`)

  return (
    <div className='mt-2 p-6 border rounded-2xl bg-white'>
      <h3 className='text-center text-lg font-semibold'>How many days do you want to travel?</h3>
      <div className='flex items-center justify-center gap-8 mt-5'>
        <Button
          variant={'outline'}
          size={'icon'}
          onClick={decrement}
          className='rounded-full size-14'
          aria-label='Decrease days'
        >
          <Minus className='h-5 w-5' />
        </Button>
        <h2 className='text-2xl font-extrabold whitespace-nowrap'>{days} Days</h2>
        <Button
          variant={'outline'}
          size={'icon'}
          onClick={increment}
          className='rounded-full size-14'
          aria-label='Increase days'
        >
          <Plus className='h-5 w-5' />
        </Button>
      </div>
      <div className='flex justify-center mt-6'>
        <Button className='px-6 py-5 text-base' onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  )
}

export default SelectDaysUi