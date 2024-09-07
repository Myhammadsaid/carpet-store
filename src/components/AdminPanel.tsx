import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('x-auth-token')

		navigate('/register')
	}

	return (
		<div>
			<section className='admin-panel'>
				<div className='container'>
					<h3 style={{ marginBottom: '76px' }} className='massega-title'>
						<span>Home</span>/Amin
					</h3>
					<h1 className='admin-panel-text'>Admin Panel</h1>
					<p className='admin-panel-par'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur cupiditate inventore, deserunt magnam provident dolores
						blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
						laudantium quam deleniti id consequatur. Minus delectus officia unde
						quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
						quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
					</p>
					<p className='admin-panel-par'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur cupiditate inventore, deserunt magnam provident dolores
						blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
						laudantium quam deleniti id consequatur. Minus delectus officia unde
						quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
						quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
					</p>
					<p className='admin-panel-par'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur cupiditate inventore, deserunt magnam provident dolores
						blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
						laudantium quam deleniti id consequatur. Minus delectus officia unde
						quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
						quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
					</p>
					<button onClick={handleLogout} className='admin-panel-btn'>
						Log out
					</button>
				</div>
			</section>
		</div>
	)
}

export default AdminPanel
