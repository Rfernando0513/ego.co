import Card from '../card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import {
    ShieldCheck,
    FileText,
    People,
    Clipboard2Check,
    Tag,
    GearWideConnected
} from 'react-bootstrap-icons';

import './Service.css';

export const Service = () => {
    const [titleRef, titleVisible] = useScrollAnimation();
    const [subTitleRef, subTitleVisible] = useScrollAnimation();

    const services = [
        {
            title: 'Auditoria & Segurança',
            icon: ShieldCheck,
            items: ['Auditoria higiênico-sanitária', 'Cliente oculto']
        },
        {
            title: 'Manuais & POPs',
            icon: FileText,
            items: ['Manual de Boas Práticas', 'Procedimentos Operacionais (POPs)']
        },
        {
            title: 'Treinamento de Equipes',
            icon: People,
            items: ['Treinamentos técnicos', 'Capacitação operacional']
        },
        {
            title: 'Responsabilidade Técnica',
            icon: Clipboard2Check,
            items: ['TRT nutricional', 'Acompanhamento técnico']
        },
        {
            title: 'Regularização & Rotulagem',
            icon: Tag,
            items: [
                'Rastreabilidade (SIF / SIM / SISB)',
                'Rotulagem nutricional',
                'Homologação de fornecedores'
            ]
        },
        {
            title: 'Projetos & Operações',
            icon: GearWideConnected,
            items: ['Cozinhas industriais', 'Acompanhamento em eventos e feiras']
        }
    ];

    return (
        <div className="containner-service">
            <h1
                ref={titleRef}
                className={`title-service fade-up ${titleVisible ? 'show' : ''}`}
            >
                Nutrição corporativa que fortalece{' '}
                <span className="span-text">empresas</span>
            </h1>

            <h2
                ref={subTitleRef}
                className={`subTitle-service fade-up delay-1 ${subTitleVisible ? 'show' : ''
                    }`}
            >
                Soluções completas em nutrição{' '}
                <span className="span-text">corporativa</span> para empresas que
                valorizam pessoas, segurança e resultados.
            </h2>

            <div className="card-grid">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        title={service.title}
                        icon={service.icon}
                        items={service.items}
                        delay={index * 0.1}
                    />
                ))}
            </div>

        </div>
    );
};
