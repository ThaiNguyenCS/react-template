import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import z from 'zod'

const schema = z.object({
	email: z.email(),
	password: z.string().min(8)
})

type FormData = z.infer<typeof schema>

// Non-zod version
// type FormData = {
// 	email: string
// 	password: string
// }

export default function UsingReactHookForm() {
	console.log('UsingReactHookForm render')
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting }
	} = useForm<FormData>({
		defaultValues: {
			email: "default@email"
		},
		resolver: zodResolver(schema)
	})

	const onSubmit: SubmitHandler<FormData> = async data => {
		try {
			await new Promise((resolve) => {
				setTimeout(resolve, 1000)
			})
			throw new Error("Mock error for demo")
		} catch (error) {
			// Set error using react-hook-form
			setError("email", {
				"message": "Mock error"
			})
		}

		console.log(data)
	}
	return <>
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register("email")}
				type="text"
				placeholder="Email"
			/>
			{errors.email && <div className="text-red-600">{errors.email.message}</div>}
			<input
				{...register("password")}
				type="password"
				placeholder="Password"
			/>
			{errors.password && <div>{errors.password.message}</div>}
			<button disabled={isSubmitting}>
				{isSubmitting ? "Loading..." : "Submit"}
			</button>
		</form >
	</>
}