import { ThemeProvider } from '@/context/theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
