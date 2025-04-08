import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Profile from './Profile'

describe('Profile component', () => {

    const mockUser = {
        fullName: 'Имя пользователя',
        avatarUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Paulie-Gualtieri.jpg'
    }

    test('Отображает имя пользователя', () => {
        render(<Profile user={mockUser}/>)
        expect(screen.getByRole('heading', {name: mockUser.fullName})).toBeInTheDocument()
    })

    test('Отображает аватар', () => {
        render(<Profile user={mockUser} />)
        const avatar = screen.getByRole('img', {name: /аватар/i})
        expect(avatar).toHaveAttribute('src', mockUser.avatarUrl)
    })
})