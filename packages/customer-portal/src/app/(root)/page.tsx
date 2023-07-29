'use client'
import React from 'react'
import HotDeals from './components/HotDeals'
import Hero from './components/Hero'
import Service from './components/Service'
import GetStarted from './components/GetStarted'
import Feature from './components/Feature'
import Brand from './components/Brand'
import HomeBlogSection from './components/HomeBlogSection'
import World from '@/components/Globe'

export default function Home() {
  return (
    <>

        <Hero />

        <HotDeals />
        <Service />
        <GetStarted />
        <Feature />
        <Brand />
        <HomeBlogSection />
    </>
  )
}