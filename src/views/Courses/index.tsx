import Image from "next/image";
import React from "react";
import { Card } from "../../components/card";
import { useFetch } from "../../hooks/useFetch";
import { ICurso } from "../../types";
import * as S from "./styles"

interface Props {
    curso: ICurso
}

const CourseView:React.FC<Props> = ( { curso }) =>{
    const { data } = useFetch(`/file/${curso.fotoUrl}`)
    console.log(data);
    return(
        <>
            <S.Container>
                <S.Content>
                    <S.FirstSection>
                        <S.ContainerImage>
                            {data?.link ? (<Image layout="responsive" loader={() => data.link} src={data.link}  width={490} height={500} alt="escola"/>) : null}
                        </S.ContainerImage>
                        <S.ContainerLeft>
                            <S.Title>
                                {curso.nome}
                            </S.Title>
                            <span>Area de formação: {curso?.AreaDeFormacao?.nome}</span>
                            <p>
                                {curso.descricao}
                            </p>
                        </S.ContainerLeft>
                    </S.FirstSection>
                    <S.SecondSection>
                        <S.Title>
                            Disciplinas
                        </S.Title>
                        <S.ContainerCard>
                            {curso.Disciplina?.map((subject) => (
                                <Card key={subject.id} content={subject}/>
                            ))}
                        </S.ContainerCard>
                    </S.SecondSection>
                </S.Content>
            </S.Container>
        </>
    );
}

// onClick = {() => router.push(`/SearchSchool/AreaDeFormacao/${area.id}`)} 
export { CourseView }