// SignupPage.jsx

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

const SignupPage = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('유효한 이메일 형식이 아닙니다.')
            .required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 16자 이하여야 합니다.')
            .required('비밀번호를 반드시 입력해주세요.'),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
            .required('비밀번호 확인을 입력해주세요.'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log('회원가입 정보:', data);
        reset();
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Title>회원가입</Title>

            <StyledInput
                type="email"
                placeholder="이메일"
                {...register('email')}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <StyledInput
                type="password"
                placeholder="비밀번호"
                {...register('password')}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <StyledInput
                type="password"
                placeholder="비밀번호 확인"
                {...register('passwordCheck')}
            />
            <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>

            <SubmitButton type="submit" value="회원가입" disabled={!isValid} />
        </FormContainer>
    );
};

export default SignupPage;

const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: bold;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
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
