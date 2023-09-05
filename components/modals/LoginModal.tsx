'use client'

import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'

import Modal from './Modal'
import Input from '../inputs/Input'
import Heading from '../navbar/Heading'
import Button from '../navbar/Button'

const LoginModal = () => {
  const router = useRouter()
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Logged in')
        router.refresh()
        loginModal.onClose()
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  const onToggle = useCallback(() => {
    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <div
        className="
      mt-4 text-center font-light text-neutral-500">
        <p>
          Don't have an account?
          <span
            onClick={onToggle}
            className="
              cursor-pointer
              text-neutral-800 
              hover:underline
            ">
            {' '}
            Register
          </span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal