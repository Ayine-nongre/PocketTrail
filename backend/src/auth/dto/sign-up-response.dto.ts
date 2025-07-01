import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class SignUpResponseDto {
    @ApiProperty({
        example: 200,
        description: 'Status of the response'
    })
    statusCode: HttpStatus;

    @ApiProperty({
        example: 'User created successfully',
        description: 'Message describing the outcome of the operation'
    })
    message: string;

    @ApiProperty({
        type: Object,
        description: 'Details of the created user',
        example: {
            id: 1,
            email: 'test@example.com',
            name: 'John Doe',
            refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            createdAt: '2023-10-01T00:00:00.000Z',
            updatedAt: '2023-10-01T00:00:00.000Z'
        }

    })
    data: {
        id: number;
        email: string;
        name: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    };

    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        description: 'JWT access token for the user'
    })
    accessToken: string;

    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        description: 'JWT refresh token for the user'
    })
    refreshToken: string;
}