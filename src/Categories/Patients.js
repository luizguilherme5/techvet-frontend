import React from 'react';
import { List, Responsive, Filter, ReferenceInput, Show, SelectInput, SimpleList, Edit, DateInput, RadioButtonGroupInput, Create, Datagrid, TextField, EditButton, DeleteButton, SimpleForm, TextInput, ShowButton, SimpleShowLayout, DateField } from 'admin-on-rest/lib/mui';

const PatientFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="patients" alwaysOn />
    <ReferenceInput label="Nome do Paciente" source="id" reference="patient" allowEmpty>
      <SelectInput source="id" optionText="pacientName" />
    </ReferenceInput>
  </Filter>
);

const TextInputValidation = (value) => {
  if (!value) {
    return ['Campo obrigatório'];
  }
  return [];
};

export const PatientList = props => (
  <List {...props} filters={<PatientFilter />}title={'Pacientes'}>
    <Responsive
      small={
        <SimpleList
          primaryText={patient => `Nome: ${patient.patientName}`}
          secondaryText={patient => patient.breed}
          tertiaryText={patient => patient.species}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" label="RG BD Nº" />
          <TextField source="patientName" label="Nome do Paciente" />
          <TextField source="species" label="Espécie" />
          <TextField source="breed" label="Raça" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

const PatientTitle = ({ record }) => {
  return <span>Paciente {record ? `"${record.patientName}"` : ''}</span>;
};

export const PatientEdit = props => (
  <Edit title={<PatientTitle />} {...props}>
    <SimpleForm>
      <TextInput
        source="patientName"
        label="Nome do Paciente"
        validation={TextInputValidation}
      />
      <RadioButtonGroupInput
        source="species"
        label="Espécie"
        choices={[
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
        ]}
        validation={TextInputValidation}
      />
      <TextInput
        source="breed"
        label="Raça"
        validation={TextInputValidation}
      />
      <RadioButtonGroupInput
        source="size"
        label="Tamanho"
        choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
        ]}
        validation={TextInputValidation}
      />
      <RadioButtonGroupInput
        source="gender"
        label="Sexo"
        choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
        ]}
        validation={TextInputValidation}
      />
      <DateInput
        source="birthday"
        label="Data de Nascimento"
        options={{
          mode: 'landscape',
          maxDate: new Date(),
          hintText: 'Data de Nascimento',
          cancelLabel: 'Cancelar',
          locale: 'pt',
        }}
      />
      <TextField
        source="coat"
        label="Pelagem"
        validation={TextInputValidation}
      />
    </SimpleForm>
  </Edit>
);

export const PatientCreate = props => (
  <Create {...props} title={'Pacientes'}>
    <SimpleForm>
      <TextInput
        source="patientName"
        label="Nome do Paciente"
        validation={TextInputValidation}
      />
      <RadioButtonGroupInput
        source="species"
        validation={TextInputValidation}
        label="Espécie"
        choices={[
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
        ]}
      />
      <TextInput
        source="breed"
        label="Raça"
        validation={TextInputValidation}
      />
      <RadioButtonGroupInput
        source="size"
        validation={TextInputValidation}
        label="Tamanho"
        choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
        ]}
      />
      <RadioButtonGroupInput
        source="gender"
        validation={TextInputValidation}
        label="Sexo"
        choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
        ]}
      />
      <DateInput
        source="birthday"
        label="Data de Nascimento"
        validation={TextInputValidation}
        options={{
          mode: 'landscape',
          maxDate: new Date(),
          hintText: 'Data de Nascimento',
          cancelLabel: 'Cancelar',
          locale: 'pt',
        }}
      />
      <TextInput
        source="coat"
        label="Pelagem"
        validation={TextInputValidation}
      />
    </SimpleForm>
  </Create>
);

export const PatientShow = props => (
  <Show title={<PatientTitle />} {...props}>
    <SimpleShowLayout>
      <TextField
        value="off"
        source="patientName"
        label="Nome do Paciente"
        validation={TextInputValidation}
      />
      <TextField
        source="species"
        label="Espécie"
        choices={[
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
        ]}
        validation={TextInputValidation}
      />
      <TextField
        source="breed"
        label="Raça"
        validation={TextInputValidation}
      />
      <TextField
        source="size"
        label="Tamanho"
        choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
        ]}
        validation={TextInputValidation}
      />
      <TextField
        source="gender"
        label="Sexo"
        choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
        ]}
        validation={TextInputValidation}
      />
      <DateField
        source="birthday"
        label="Data de Nascimento"
        validation={TextInputValidation}
      />
      <TextField
        source="coat"
        label="Pelagem"
        validation={TextInputValidation}
      />
    </SimpleShowLayout>
  </Show>
);
