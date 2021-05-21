import './App.css'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function App() {
  const [selected, setSelected] = useState(people[0])
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container flex flex-wrap items-center px-5 py-24 mx-auto'>
          <div className='pb-10 mb-10 border-b border-gray-200 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0'>
            <h1 className='mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font'>
              Pitchfork Kickstarter Taxidermy
            </h1>
              <Listbox value={selected} onChange={setSelected}>
                <div className='relative pb-4 mt-1'>
                  <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
                    <span className='block truncate'>{selected.name}</span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                      <SelectorIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `${
                              active
                                ? 'text-amber-900 bg-amber-100'
                                : 'text-gray-900'
                            }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? 'font-medium' : 'font-normal'
                                } block truncate`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? 'text-amber-600' : 'text-amber-600'
                                  }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <CheckIcon
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className='sr-only'>Enable notifications</span>
                <span
                  className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
          </div>
          <div className='flex flex-col md:w-1/2 md:pl-12'>
            <h2 className='mb-3 text-sm font-semibold tracking-wider text-gray-800 title-font'>
              CATEGORIES
            </h2>
            <nav className='flex flex-wrap -mb-1 list-none'>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>First Link</a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>Second Link</a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>Third Link</a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>Fourth Link</a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>Fifth Link</a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>Sixth Link</a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>
                  Seventh Link
                </a>
              </li>
              <li className='w-1/2 mb-1 lg:w-1/3'>
                <a className='text-gray-600 hover:text-gray-800'>Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
