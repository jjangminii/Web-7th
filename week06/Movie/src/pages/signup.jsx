import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useState } from 'react';
import { axiosInstanceBE } from '../apis/axios-instance-BE';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('이메일 형식이 아닙니다.')
            .required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(4, '비밀번호는 4자 이상이어야 합니다.')
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

    const [showError, setShowError] = useState({ email: false, password: false });

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstanceBE.post('/auth/register', {
                email: data.email,
                password: data.password,
                passwordCheck: data.passwordCheck,
            });

            console.log("회원가입 성공:", response.data);

            // 회원가입 후 로그인 페이지로 리디렉션
            navigate('/login');
        } catch (error) {
            console.log("회원가입 실패:", error);
            alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
        }

        reset();
        setShowError({ email: false, password: false });
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Title>회원가입</Title>
            <StyledInput
                type="email"
                placeholder="이메일"
                {...register('email')}
                onFocus={() => setShowError((prev) => ({ ...prev, email: true }))}
            />
            {showError.email && <ErrorText>{errors.email?.message}</ErrorText>}

            <StyledInput
                type="password"
                placeholder="비밀번호"
                {...register('password')}
                onFocus={() => setShowError((prev) => ({ ...prev, password: true }))}
            />
            {showError.password && <ErrorText>{errors.password?.message}</ErrorText>}

            <StyledInput
                type="password"
                placeholder="비밀번호 확인"
                {...register('passwordCheck')}
            />
            {showError.passwordCheck && <ErrorText>{errors.passwordCheck?.message}</ErrorText>}

            <Button type="submit" value="회원가입" disabled={!isValid} />
        </FormContainer>
    );
};

export default SignupPage;


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

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const StyledInput = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 50px;
    border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
`;

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin: 5px 0 10px 0;
`;


const Button = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 50px;
    background-color: ${(props) => (props.disabled ? 'gray' : '#007bff')};
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.disabled ? 'gray' : '#0056b3')};
    }
`;
