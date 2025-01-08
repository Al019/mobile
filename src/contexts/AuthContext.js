import { createContext, useContext, useEffect, useState } from "react"
import axios from "../api/axios"
import { setToken } from "../services/TokenService"
import { router } from "expo-router"

const auth = createContext({})

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [email_address, setEmailAddress] = useState("")
  const [visibleAlert, setVisibleAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const loadUser = async () => {
      await getUser()
    }
    loadUser()
  }, [])

  const getUser = async () => {
    await axios.get("/user")
      .then(({ data }) => {
        setUser(data)
      })
  }

  const login = async ({ ...data }) => {
    setLoading(true)
    await axios.post("/login", data)
      .then(async ({ data }) => {
        await setToken(data.token)
        await getUser()
      })
      .catch((error) => {
        setVisibleAlert(true)
        setErrorMessage(error.response.data.errors.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const changePassword = async ({ ...data }) => {
    setLoading(true)
    await axios.post("/change-password", data)
      .then(async () => {
        await getUser()
        router.back()
      })
      .catch((error) => {
        setVisibleAlert(true)
        if (error.response.data.errors.message) {
          setErrorMessage(error.response.data.errors.message)
        }
        if (error.response.data.errors.password) {
          setErrorMessage(error.response.data.errors.password[0])
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const logout = async () => {
    setLoading(true)
    await axios.get("/logout")
      .then(() => {
        setToken(null)
        setUser(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <auth.Provider value={{ user, loading, email_address, visibleAlert, errorMessage, login, changePassword, logout, setVisibleAlert }}>
      {children}
    </auth.Provider>
  )
}

export const useAuthContext = () => useContext(auth)