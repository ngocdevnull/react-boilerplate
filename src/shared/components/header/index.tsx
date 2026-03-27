import * as React from 'react';

import { Search, HelpCircle, Bell, ChevronDown } from 'lucide-react';

import doctorAvatarImage from '@/assets/images/doctor-avatar.png';

export function Header() {
  return (
    <header className="flex h-[88px] w-full items-center justify-between border-b border-gray-100 bg-white px-8">
      <div className="flex flex-1 items-center gap-3">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Appointment, Patient or etc"
          className="w-full max-w-[400px] bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-gray-100 pr-6">
          <button className="text-gray-400 transition-colors hover:text-primary">
            <HelpCircle className="h-6 w-6" />
          </button>
          <button className="relative text-gray-400 transition-colors hover:text-primary">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#FF5263]" />
          </button>
        </div>

        <div className="flex cursor-pointer items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-blue-100">
            <img
              src={doctorAvatarImage}
              alt="Stephen Conley"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-sm font-bold text-black-10">Stephen Conley</span>
            <span className="text-xs text-gray-500">Cardiologist</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
