import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../../slices/authSlice';
const Header = () => {
	const dispatch = useDispatch();
	const authData = useSelector((state) => state.authData);

	const logoutUser = () => {
		const uid = authData.uid;
		dispatch(logOut(uid));
	};

	return (
		<header className='flex items-center justify-between flex-wrap bg-blue-500 p-6'>
			<div className='font-semibold text-xl text-white tracking-tight'>
				CHAT-WITH-ME
			</div>
			{authData.isAuth ? (
				<div className='font-semibold text-xl text-white tracking-tight'>{`Привет ${authData.userName}!`}</div>
			) : null}
			<div>
				{authData.isAuth ? (
					<button
						className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white
						hover:border-transparent hover:text-blue-800 hover:bg-white'
						onClick={logoutUser}
					>
						Выход
					</button>
				) : (
					<>
						<Link
							to={'/login'}
							className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white
						hover:border-transparent hover:text-blue-800 hover:bg-white mr-5'
						>
							Вход
						</Link>
						<Link
							to={'/signup'}
							className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white
						hover:border-transparent hover:text-blue-800 hover:bg-white'
						>
							Регистрация
						</Link>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
