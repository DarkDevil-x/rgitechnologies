"use client"

import { Card, CardContent } from "@/components/ui/caard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMember {
  id: number
  name: string
  role: string
  photo: string
  initials: string
  color: string
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      photo: "/placeholder.svg?height=400&width=400",
      initials: "SJ",
      color: "bg-pink-500",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      photo: "/placeholder.svg?height=400&width=400",
      initials: "MC",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Lead Designer",
      photo: "/placeholder.svg?height=400&width=400",
      initials: "AP",
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Marketing Director",
      photo: "/placeholder.svg?height=400&width=400",
      initials: "DR",
      color: "bg-green-500",
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Product Manager",
      photo: "/placeholder.svg?height=400&width=400",
      initials: "EW",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      name: "James Taylor",
      role: "Senior Developer",
      photo: "/placeholder.svg?height=400&width=400",
      initials: "JT",
      color: "bg-red-500",
    },
  ]

  return (
    <div className="min-h-scree  bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Our Colorful Team
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the talented individuals who make our company thrive with their expertise and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4"
      style={{ borderTopColor: getBorderColor(member.color) }}
    >
      <div className={`aspect-square relative ${member.color} bg-opacity-10`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
        <Avatar className="h-full w-full rounded-none">
          <AvatarImage src={member.photo} alt={member.name} className="object-cover" />
          <AvatarFallback className={`text-4xl rounded-none ${member.color} text-white`}>
            {member.initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-medium">{member.name}</h3>
        <p className="text-gray-600 mt-1">{member.role}</p>
        <div className="flex justify-center gap-4 mt-4">
          <SocialIcon icon="Twitter" color={getIconColor(member.color)} />
          <SocialIcon icon="Linkedin" color={getIconColor(member.color)} />
          <SocialIcon icon="Mail" color={getIconColor(member.color)} />
        </div>
      </CardContent>
    </Card>
  )
}

function SocialIcon({ icon, color }: { icon: string; color: string }) {
  const getIcon = () => {
    switch (icon) {
      case "Twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      case "Linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      case "Mail":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <button className="rounded-full p-2 hover:bg-gray-100 transition-colors" style={{ color }}>
      {getIcon()}
    </button>
  )
}

// Helper functions to extract colors
function getBorderColor(bgColorClass: string): string {
  const colorMap: Record<string, string> = {
    "bg-pink-500": "#ec4899",
    "bg-purple-500": "#a855f7",
    "bg-blue-500": "#3b82f6",
    "bg-green-500": "#22c55e",
    "bg-yellow-500": "#eab308",
    "bg-red-500": "#ef4444",
  }
  return colorMap[bgColorClass] || "#6366f1"
}

function getIconColor(bgColorClass: string): string {
  const colorMap: Record<string, string> = {
    "bg-pink-500": "#ec4899",
    "bg-purple-500": "#a855f7",
    "bg-blue-500": "#3b82f6",
    "bg-green-500": "#22c55e",
    "bg-yellow-500": "#eab308",
    "bg-red-500": "#ef4444",
  }
  return colorMap[bgColorClass] || "#6366f1"
}

