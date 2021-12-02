import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import { FormButtonGroup, FormItem, FormLayout, Input, Submit } from '@formily/antd';
import styles from './index.less';

export default function IndexPage() {
  const form = createForm();
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="name"
          title="输入框"
          required
          initialValue="Hello Word"
          decorator={[FormItem]}
          component={[Input]}
        />
      </FormLayout>
      <FormConsumer>
        {() => {
          return (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: '1px dashed #666',
              }}
            >
              实时响应 {form.values.name}
            </div>
          );
        }}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={(values)=>{
          return new Promise(resolve=>{
            setTimeout(()=>{
              console.log(values)
              resolve(values)
            },2000)
          })
        }}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
}
