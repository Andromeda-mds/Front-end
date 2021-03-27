import React from "react";
import {
  Container,
  InputSection,
  InputNome,
  InputCEP,
  InputCPF,
  InputCRM,
  InputCidade,
  InputDataNascimento,
  InputEmail,
  InputEspecialidade,
  InputLogradouro,
  InputNumero,
  InputTelefone,
  ButtonSection,
  CadastrarMedicoButton,
  CadastroMedicoFormWrapper,
} from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import Check from "@material-ui/icons/Check";
import NativeSelect from "@material-ui/core/NativeSelect";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const CadastroMedicoForm = () => {
  const Especialidades = [
    {
      label: "Cardiologia",
      value: "cardiologia",
    },
    {
      label: "Dermatologia",
      value: "dermatologia",
    },
    {
      label: "Endocrinologia",
      value: "endocrinologia",
    },
    {
      label: "Pediatria",
      value: "pediatria",
    },
    {
      label: "Urologia",
      value: "urologia",
    },
  ];

  const [especialidade, setEspecialidade] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  const handleEspecialidade = (event) => {
    setEspecialidade(event.target.value);
  };

//   React.useEffect(() => {
//     axios
//       .post(".../medico", {
//         nomeCompleto: "",
//         Telefone: telefone,
//         CRM: crm,
//       })
//       .then((res) => console.log("Médico cadastrado com sucesso"))
//       .catch((err) =>
//         console.log("Ocorreu um erro ao cadastrar o médico.", err)
//       );
//   }, [submmitTrigger]);

  return (
    <Container>
      <InputSection>
        <form className="form">
          <InputNome
            label="Nome-Completo"
            variant="outlined"
            inputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
          />
          <br />
          <div className="linha1">
            <InputCPF label="CPF" variant="outlined" />
            <InputDataNascimento variant="outlined" type="date" />
          </div>

          <br />
          <div className="linha2">
            <InputEmail label="Email" variant="outlined" />
            <InputCRM label="CRM" variant="outlined" />
          </div>

          <br />
          <div className="linha3">
            <FormControl variant="outlined" style={{ width: "60%" }}>
              <InputLabel id="especialidades">Especialidade</InputLabel>
              <InputEspecialidade
                labelId="especialidades"
                label="Especialid"
                variant="outlined"
                value={especialidade}
                onChange={handleEspecialidade}
              >
                {Especialidades.map((v) => {
                  return <MenuItem value={v.value}>{v.label}</MenuItem>;
                })}
              </InputEspecialidade>
            </FormControl>
            <InputTelefone
              label="Telefone"
              variant="outlined"
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <br />
          <div className="linha4">
            <InputCEP label="CEP" variant="outlined" />

            <InputCidade label="Cidade" variant="outlined" />
          </div>

          <br />
          <div className="linha5">
            <InputLogradouro label="Logradouro" variant="outlined" />
            <InputNumero label="Numero" variant="outlined" />
          </div>
        </form>
      </InputSection>
      <ButtonSection>
        <CadastrarMedicoButton>
          <h1>Cadastrar Médico</h1>
          <Check />
        </CadastrarMedicoButton>
      </ButtonSection>
    </Container>
  );
};

export default CadastroMedicoForm;
