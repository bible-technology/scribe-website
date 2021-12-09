import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '@/utils/functions'

import Menu from '@/layout/Menu'
import Feature from '@/components/Feature'

import AppleLogo from '../public/logos/apple.svg'
import WindowsLogo from '../public/logos/windows.svg'
import LinuxLogo from '../public/logos/linux.svg'


import {
  CodeIcon, PencilIcon, SupportIcon, CloudUploadIcon, GlobeIcon, GlobeAltIcon, DesktopComputerIcon,
  DatabaseIcon, CollectionIcon, TemplateIcon, StatusOfflineIcon, LibraryIcon
} from '@heroicons/react/outline';


export default function Index() {

  interface category {
    id: number;
    title: string
    image: string;
    isComingSoon: boolean;
  }

  const categoriesItems: category[] = [
    {
      id: 1,
      title: "Translation mode",
      image: '/images/editor.png',
      isComingSoon: false,
    },
    {
      id: 1,
      title: "OBS Mode",
      image: '/images/editor-obs.png',
      isComingSoon: true,
    },
    {
      id: 1,
      title: "Audio Mode",
      image: '/images/editor-audio.png',
      isComingSoon: true,
    },
    {
      id: 1,
      title: "Machine Translation",
      image: '/images/editor.png',
      isComingSoon: true,
    },
  ];

  let [categories] = useState(categoriesItems);

  let [features] = useState([
    { icon: "CodeIcon", text: "open source", description: "MIT license" },
    { icon: "PencilIcon", text: "USFM Editing", description: "Some Description" },
    { icon: "SupportIcon", text: "Translation Helps", description: "Some Description" },
    { icon: "CloudUploadIcon", text: "USFM Import", description: "Some Description" },
    { icon: "GlobeIcon", text: "Multi-language", description: "Some Description", tags: ["LTR"] },
    { icon: "TemplateIcon", text: "Modular", description: "Some Description", tags: ["OBS", "Audio", "MT"] },
    { icon: "StatusOfflineIcon", text: "offline mode", description: "Some Description" },
    { icon: "GlobeAltIcon", text: "Web App", description: "Some Description" },
    { icon: "DesktopComputerIcon", text: "Desktop App", description: "Some Description", tags: ["Windows", "Mac OSX", "Linux"] },
    { icon: "LibraryIcon", text: "Cross Platform", description: "Some Description", className: "col-start-2" },
  ])

  return (
    <>
      <Tab.Group>

        <div className="pb-52 bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue">
          <div className="container mx-auto">
            <Menu />
            <div className="py-40 text-center">
              <h1 className="my-5 text-white text-8xl uppercase font-bold tracking-wider text-shadow-xl">Autographa</h1>
              <p className="text-xl font-semibold leading-8">Scripture drafting and editing made simple</p>

              <div className="w-2/5 my-24 mx-auto flex">
                <div className="w-1/2 mx-10 items-center">
                  <a
                    href="#"
                    className="whitespace-nowrap block items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm 
                            text-2xl font-bold text-secondary bg-white hover:text-white hover:bg-secondary "
                  >
                    Try it online
                  </a>
                </div>
                <div className="w-1/2 mx-10 flex flex-col items-center">
                  <a
                    href="#"
                    className="whitespace-nowrap block items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm 
                            text-2xl font-bold text-white bg-secondary hover:text-secondary hover:bg-white"
                  >
                    Download
                  </a>
                  <div className="flex gap-5 my-5">
                    <AppleLogo className="h-8 text-white" />
                    <WindowsLogo className="h-8 text-white" />
                    <LinuxLogo className="h-8 text-white" />
                  </div>
                  <span className="text-white font-medium tracking-wider">MacOSX, Windows, &amp; Linux</span>
                </div>
              </div>


              {/* <ul className="grid grid-cols-4 w-2/3 mx-auto uppercase font-semibold cursor-pointer border-b border-secondary">
                <li className="text-white hover:text-secondary border-b border-white hover:border-secondary pb-6">Translation mode</li>
                <li className="relative border-b border-secondary hover:text-white hover:border-white">OBS mode<span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-7 text-white font-bold text-xxs bg-highlight">coming soon</span></li>
                <li className="relative border-b border-secondary hover:text-white hover:border-white">Audio mode<span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-7 text-white font-bold text-xxs bg-highlight">coming soon</span></li>
                <li className="relative border-b border-secondary hover:text-white hover:border-white">Machine Translation<span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-7 text-white font-bold text-xxs bg-highlight">coming soon</span></li>
              </ul> */}


              <Tab.List className="w-2/3 mx-auto flex space-x-1 border-b border-secondary/20">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        'w-full py-5 leading-5 font-semibold uppercase relative rounded-t-xl hover:bg-white/[0.12]',
                        selected
                          ? 'text-white border-b-4 border-white '
                          : 'text-secondary hover:text-white'
                      )
                    }
                  >
                    {category.title}
                    {!!category.isComingSoon &&
                      <span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-10 text-white font-bold text-xxs bg-highlight">coming soon</span>
                    }
                  </Tab>
                ))}
              </Tab.List>



            </div>
          </div>
        </div>

        <Tab.Panels>
          {categories.map((posts, idx) => (
            <Tab.Panel key={idx} className="container mx-auto">
              <img className="mx-auto -mt-80 w-2/3 rounded-xl shadow-lg" src={posts.image} alt="Editor" />
            </Tab.Panel>
          ))}
        </Tab.Panels>


      </Tab.Group>

      {/* <div className="container mx-auto"> */}
      {/* <img className="mx-auto -mt-80 w-2/3 rounded-xl shadow-lg" src="/images/editor.png" alt="" /> */}

      {/* </div> */}

      <div className="container mx-auto my-80">

        <h2 className="heading">Why another translation tool?</h2>

        <div className="mx-auto mt-20 w-2/3 bg-secondary p-16 px-20 leading-loose text-2xl text-center text-white rounded-xl shadow-lg ">
          To equip the bible translation community with a free, state of the art, minimalist, yet effective alternative to existing USFM software designed specially with the technologically challenged Mother tongue translator (MTT) in mind.
        </div>

        <div className="section">
          <div className="px-40 text-white">
            <h3 className="heading">Free &amp; Open Source</h3>
            <p className="mb-20 prose text-white/60">Autographa is free and open source and made available to all without any restrictions. Contributions are welcome!</p>
            <h3 className="heading">Cross-Platform</h3>
            <p className="prose text-white/60">Autographa is available both as a desktop application (Windows, Linux and MacOS) and as a website so that you can work from anywhere.</p>
          </div>
          <div className="p-20 -mr-64">
            <img className="rounded-2xl shadow-2xl p-2 bg-white" src="/images/editor-audio.png" alt="" />
          </div>
        </div>

        <div className="section">
          <div className="px-40 order-last">
            <h3 className="heading">User Centric</h3>
            <p className="mb-20 prose text-white/60">The application is built from the ground up get you started with little or no training while enabling both beginners and veteran to their best work!</p>
            <h3 className="heading">Performance</h3>
            <p className="prose text-white/60">We use the latest technology to maximize performance and provide you with an uninterrupted work flow.</p>
          </div>
          <div className="p-20 -ml-64">
            <img className="rounded-2xl shadow-2xl p-2 bg-white" src="/images/editor-audio.png" alt="" />
          </div>
        </div>

        <div className="section">
          <div className="px-40">
            <h3 className="heading">Multilingual</h3>
            <p className="mb-20 prose text-white/60">Autographa&apos;s User Interface is localized into Hindi,Arabic, Portuguese and Spanish and it supports rendering and editing complex scripts like Awami Nastaliq (right to left).</p>
            <h3 className="heading">CCBT ready</h3>
            <p className="prose text-white/60">Autographa has shown great success in being used on the field for translation projects using the Church Centric Bible Translation paradigm.</p>
          </div>
          <div className="p-20 -mr-64">
            <img className="rounded-2xl shadow-2xl p-2 bg-white" src="/images/editor-audio.png" alt="" />
          </div>
        </div>




      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-40">
          <h2 className="heading">Features</h2>
          <div className="my-40 mx-auto grid grid-cols-3 gap-10">
            {
              features.map((item, id) => (
                <Feature key={id} icon={item.icon} text={item.text} description={item.description} className={item.className} />
              ))
            }
            <div>


            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container mx-auto py-20 text-white">

          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="heading">Autographa</h3>
              <h5>&copy; Bridge Connectivity Solutions Pvt. Ltd.</h5>
            </div>
            <ul className="flex gap-5">
              <li><a href="#">Features</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Try It</a></li>
              <li><a href="#">Download</a></li>
            </ul>
          </div>

        </div>
      </div>

    </>

  )
}