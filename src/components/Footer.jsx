import { GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Affan. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <GitHub />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <Linkedin />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

