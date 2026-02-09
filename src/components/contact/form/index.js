import { useState } from "react";
import "./Form.css";
import { TextCamp } from "../textCamp/TextCamp";

const Form = () => {
    const [formData, setFormData] = useState({
        nome: "",
        whatsapp: "",
        email: "",
        estabelecimento: "",
        tipo: "",
        mensagem: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleWhatsApp = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 11);

        if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
        } else {
            value = value.replace(/^(\d*)$/, "($1");
        }

        setFormData({ ...formData, whatsapp: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nome.trim()) {
            alert("Informe seu nome.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Informe um e-mail válido.");
            return;
        }

        if (!formData.estabelecimento.trim()) {
            alert("Informe o nome do estabelecimento.");
            return;
        }

        if (formData.whatsapp.replace(/\D/g, "").length !== 11) {
            alert("WhatsApp inválido.");
            return;
        }

        if (!formData.tipo) {
            alert("Selecione o tipo de estabelecimento.");
            return;
        }

        if (formData.mensagem.length < 20) {
            alert("Mensagem deve ter no mínimo 20 caracteres.");
            return;
        }

        const numeroDestino = "5511914100225";

        const mensagem = `
    Solicitação recebida pelo site EGO.CO

Nome: ${formData.nome}
WhatsApp: ${formData.whatsapp}
E-mail: ${formData.email}
Estabelecimento: ${formData.estabelecimento}
Tipo de estabelecimento: ${formData.tipo}

Mensagem:
${formData.mensagem}
`;

        const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(
            mensagem
        )}`;

        window.open(url, "_blank");
    };

    const handleNome = (e) => {
        const value = e.target.value;

        if (/^[A-Za-zÀ-ÿ\s]*$/.test(value)) {
            setFormData({ ...formData, nome: value });
        }
    };


    return (
        <section className="Form">
            <form onSubmit={handleSubmit} noValidate>
                <h2>Solicitar contato ou orçamento</h2>

                <TextCamp
                    label="Nome"
                    name="nome *"
                    placeholder="Digite seu nome..."
                    value={formData.nome}
                    onChange={handleNome}
                    required
                />

                <TextCamp
                    label="WhatsApp"
                    name="whatsapp"
                    placeholder="(99) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleWhatsApp}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                />

                <TextCamp
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <TextCamp
                    label="Nome do estabelecimento"
                    name="estabelecimento"
                    placeholder="Digite o nome do estabelecimento..."
                    value={formData.estabelecimento}
                    onChange={handleChange}
                    required
                />

                <div>
                    <label className="RadioTitle">Tipo de estabelecimento <span style={{ color: "red"}}>*</span></label>
                    <div className="RadioGroup">
                        {["Restaurante", "Bar", "Padaria", "Outro"].map((item) => (
                            <label key={item}>
                                <input
                                    type="radio"
                                    name="tipo"
                                    value={item}
                                    checked={formData.tipo === item}
                                    onChange={handleChange}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="input-message">
                    <label>Mensagem <span style={{ color: "red"}}>*</span></label>
                    <textarea
                        name="mensagem"
                        className="field"
                        placeholder="Conte brevemente sua necessidade"
                        value={formData.mensagem}
                        onChange={handleChange}
                    />
                    <span>{formData.mensagem.length} / 20 caracteres</span>
                </div>

                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    );
};

export default Form;
