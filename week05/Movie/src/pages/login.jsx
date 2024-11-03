// login.jsx

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useState } from 'react';

const LoginPage = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('이메일 형식이 아닙니다.')
            .required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 16자 이하여야 합니다.')
            .required('비밀번호를 반드시 입력해주세요.'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', // 실시간 유효성 검사를 위해 변경
    });

    const [showError, setShowError] = useState({ email: false, password: false });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
        reset();
        setShowError({ email: false, password: false });
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Text>로그인</Text>
            <StyledInput
                type="email"
                placeholder="이메일"
                {...register('email')}
                onFocus={() => setShowError((prev) => ({ ...prev, email: true }))}
            />
            {showError.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}

            <StyledInput
                type="password"
                placeholder="비밀번호"
                {...register('password')}
                onFocus={() => setShowError((prev) => ({ ...prev, password: true }))}
            />
            {showError.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}

            <SubmitButton type="submit" value="로그인" disabled={!isValid} />
        </FormContainer>
    );
};

export default LoginPage;

const Text = styled.h1`
    margin: 0 0 30px 0;
    font-size: 24px;
    font-weight: bold;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    margin: 100px auto;
    padding: 30px 50px;
    border: none;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.2);
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 50px;
    font-size: 16px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: 5px 0 15px 0;
`;

const SubmitButton = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    border: none;
    border-radius: 50px;
    background-color: ${(props) => (props.disabled ? 'gray' : '#007bff')};
    color: #fff;
    font-size: 16px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        background-color: ${(props) => (props.disabled ? 'gray' : '#0056b3')};
    }
`;
