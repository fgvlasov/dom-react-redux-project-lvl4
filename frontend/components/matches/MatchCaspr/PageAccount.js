import React, { useState } from "react";
import { Heading, Box, useColorModeValue } from "@chakra-ui/react";
import AccountBlock from "../../__common/account/AccountBlock";
import AccountBlock2 from "../../__common/account/AccountBlock2";
import data from "../../../data/default_account_fields.json";
import data_user from "../../../data/data_user.json";
import { SectionTwoFields } from "../../__common/SectionTwoFields";
import { InputText } from "../../__common/InputText";
import { InputCheckbox } from "../../__common/Checkbox";

export default function CasprPageAccount({ ...props }) {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Applicant Account for Caspr
      </Heading>

      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Access Credentials
      </Heading>

      <Box
        as="form"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        borderRadius="lg"
      >
        <AccountBlock2
          type={data._000_020_email.attr_type}
          title={data._000_020_email.attr_label[props.match]}
          parameter={data_user.user.email}
          helpText={data._000_020_email.helpText}
          rightButton="Edit"
        >
          <InputText
            id={data._000_021_email_new.id}
            label={data._000_021_email_new.attr_label[props.match]}
            labelPosition="center"
            placeholder={data._000_021_email_new.attr_placeholder[props.match]}
            helperText="Additional text 2"
            onChange={(event) => setInputEmail(event.target.value)}
          />
          <InputText
            id={data._000_022_email_confirm.id}
            label={data._000_022_email_confirm.attr_label[props.match]}
            labelPosition="center"
            placeholder={
              data._000_022_email_confirm.attr_placeholder[props.match]
            }
            helperText="Additional text 2"
            onChange={(event) => {
              setInputEmailConf(event.target.value);
            }}
          />
        </AccountBlock2>

        <AccountBlock2
          title="Password"
          parameter={data_user.user.password}
          name="Password"
          type="password"
          buttonHide="false"
          rightButton="Edit"
        ></AccountBlock2>

        <AccountBlock
          title="Sequrity
		Questions"
          type="questions"
          sequrity_question_1={data_user.user.sequrity_question_1}
          sequrity_answer_1={data_user.user.sequrity_answer_1}
          sequrity_question_2={data_user.user.sequrity_question_2}
          sequrity_answer_2={data_user.user.sequrity_answer_2}
          rightButton="Edit"
        />
      </Box>
      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Personal Information
      </Heading>

      <AccountBlock
        title={data._000_010_text.attr_title}
        type={data._000_010_text.attr_type}
        parameter={data_user.user.first_name}
        attr_title={data._000_010_text.attr_title[props.match]}
        attr_label={data._000_010_text.attr_label[props.match]}
        attr_placeholder={data_user.user.first_name}
        rightButton="Edit"
      />
      <AccountBlock
        title={data._000_011_text.attr_title}
        type={data._000_011_text.attr_type}
        parameter={data_user.user.last_name}
        attr_title={data._000_011_text.attr_title[props.match]}
        attr_label={data._000_011_text.attr_label[props.match]}
        attr_placeholder={data_user.user.last_name}
        rightButton="Edit"
      />
      <AccountBlock
        title={data._000_012_phones.attr_title}
        type={data._000_012_phones.attr_type}
        parameter={data_user.user.primary_phone_text}
        attr_title={data._000_012_phones.attr_title[props.match]}
        attr_label={data._000_012_phones.attr_label[props.match]}
        primary_phone_id={data._000_012_phones.primary_phone_id}
        primary_phone_title={
          data._000_012_phones.primary_phone_title[props.match]
        }
        primary_phone={data_user.user.primary_phone}
        alt_phone={data_user.user.alt_phone}
        alt_phone_title={data._000_012_phones.alt_phone_title[props.match]}
        attr_placeholder={data_user.user.phone}
        rightButton="Edit"
      />
      <AccountBlock2
        type={data._000_030_gender.attr_type}
        title={data._000_030_gender.attr_label[props.match]}
        parameter={data_user.user.gender}
        helpText={data._000_030_gender.helpText}
        rightButton="Edit"
      >
        <InputCheckbox
          id="10"
          label="Choose your gender"
          defaultValue="male"
          leftElement="FaUserAlt"
          placeholder="Choose your gender"
          size="md"
          variant="outline"
          values={data._000_030_gender.genders}
        />
      </AccountBlock2>
    </>
  );
}
