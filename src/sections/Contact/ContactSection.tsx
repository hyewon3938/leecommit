"use client";

import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Section from "@/sections/Section";

type InquiryType = "" | "입점 요청" | "단체 주문";

interface FormState {
  name: string;
  email: string;
  inquiryType: InquiryType;
  message: string;
  honey: string; // honeypot
}

const initialFormState: FormState = {
  name: "",
  email: "",
  inquiryType: "",
  message: "",
  honey: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const IS_PRODUCTION = process.env.NODE_ENV === "production";
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1) honeypot: 값이 채워져 있으면 봇으로 판단하고 바로 종료
    if (form.honey) {
      return;
    }

    // 2) 필수값 검증
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim() ||
      !form.inquiryType
    ) {
      setError("항목을 모두 입력해 주세요.");
      setIsSuccess(false);
      return;
    }

    if (!emailRegex.test(form.email)) {
      setError("이메일 형식이 올바르지 않습니다.");
      setIsSuccess(false);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setError("메일 전송 설정이 올바르지 않습니다. 환경변수를 확인해 주세요.");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      if (!IS_PRODUCTION) {
        console.log("preview mode");
        await sleep(1200);
      } else {
        await emailjs.send(
          serviceId!,
          templateId!,
          {
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
            inquiry_type: form.inquiryType,
          },
          publicKey!
        );
      }

      setIsSuccess(true);
      setForm(initialFormState);
    } catch (err) {
      console.error(err);
      setError("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      backgroundColor="#f5f6f3"
      paddingMobile="80px 20px 100px 20px"
    >
      <Inner>
        <Description>
          <p>입점 제안이나 단체 주문 문의를 남겨 주시면, </p>
          <p>담당자가 확인 후 빠르게 회신드리겠습니다.</p>
        </Description>

        <Form onSubmit={handleSubmit} noValidate>
          <Row>
            <Field>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="성함을 입력해 주세요"
                required
              />
            </Field>

            <Field>
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="답변 받으실 이메일"
                required
              />
            </Field>
          </Row>

          <Row>
            <Field>
              <Label htmlFor="inquiryType">문의 유형</Label>
              <Select
                id="inquiryType"
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="">선택해 주세요</option>
                <option value="입점 요청">입점 요청</option>
                <option value="단체 주문">단체 주문</option>
                <option value="기타 문의">기타 문의</option>
              </Select>
            </Field>
          </Row>

          <Field>
            <Label htmlFor="message">문의 내용</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="가능한 자세히 적어 주시면 더 빠르게 도와드릴 수 있습니다."
              rows={6}
              required
            />
          </Field>

          {/* honeypot 필드: 사용자에게는 보이지 않지만, 봇이 채우면 걸러내는 용도 */}
          <HoneypotInput
            type="text"
            name="honey"
            value={form.honey}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isSuccess && (
            <SuccessMessage>
              문의해 주셔서 감사합니다. 확인 후 빠르게 연락드리겠습니다.
            </SuccessMessage>
          )}

          <Button type="submit" disabled={isLoading}>
            문의 남기기
          </Button>
        </Form>
      </Inner>
    </Section>
  );
}

const Inner = styled.div`
  max-width: 880px;
  margin: 0 auto;
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 13px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Field = styled.div`
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 13px;
  letter-spacing: 0.02em;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  &:focus {
    border-color: #222;
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const Select = styled.select`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  appearance: none;
  &:invalid {
    color: #8e8e8e;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  background-color: #fff;

  &:focus {
    border-color: #222;
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const Button = styled.button`
  align-self: flex-start;
  margin-top: 8px;
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #222;
  background-color: #222;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 24px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  color: #c0392b;
`;

const SuccessMessage = styled.p`
  font-size: 13px;
  color: #1d7c3f;
`;

// 화면에서 안 보이는 honeypot 필드
const HoneypotInput = styled.input`
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
`;
