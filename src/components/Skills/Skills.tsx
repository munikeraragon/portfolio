import { useState } from 'react'
import {
	AirflowIcon,
	AwsIcon,
	AzureDevopsIcon,
	AzureIcon,
	D3Icon,
	DatabricksIcon,
	DockerIcon,
	ExpressIcon,
	FastApiIcon,
	FigmaIcon,
	GardenIcon,
	GithubActionsIcon,
	GithubIcon,
	GolangIcon,
	GoogleCloudIcon,
	GraphqlIcon,
	HtmlIcon,
	JenkinsIcon,
	KubernetsIcon,
	MaterialuiIcon,
	MongodbIcon,
	MySqlIcon,
	Neo4jIcon,
	NextjsIcon,
	OpenApiIcon,
	PostgresqlIcon,
	PythonIcon,
	ReactIcon,
	RedisIcon,
	ScalaIcon,
	SparkIcon,
	TailwindIcon,
	TerraformIcon,
	TypescriptIcon,
	VercelIcon,
} from '../SVGIcons'

export interface SkillsProps {
	className?: string
}

type SkillsType = 'UI/UX Design' | 'Back End' | 'DevOps' | 'Cloud Infrastructure' | 'Storage Systems'

type SkillModel = {
	[key in SkillsType]: Skill[]
}

export interface Skill {
	label: string
	icon: JSX.Element
}

const skills: SkillModel = {
	'UI/UX Design': [
		{ label: 'Figma', icon: <FigmaIcon /> },
		{ label: 'React', icon: <ReactIcon /> },
		{ label: 'Typescript', icon: <TypescriptIcon /> },
		{ label: 'Next', icon: <NextjsIcon /> },
		{ label: 'Materialui', icon: <MaterialuiIcon /> },
		{ label: 'Tailwind', icon: <TailwindIcon /> },
		{ label: 'Html', icon: <HtmlIcon /> },
		{ label: 'D3', icon: <D3Icon /> },
	],
	'Back End': [
		{ label: 'Typescript', icon: <TypescriptIcon /> },
		{ label: 'Golang', icon: <GolangIcon /> },
		{ label: 'Python', icon: <PythonIcon /> },
		{ label: 'Scala', icon: <ScalaIcon /> },
		{ label: 'Express', icon: <ExpressIcon /> },
		{ label: 'Graphql', icon: <GraphqlIcon /> },
		{ label: 'FastApi', icon: <FastApiIcon /> },
		{ label: 'OpenApi', icon: <OpenApiIcon /> },
	],
	DevOps: [
		{ label: 'Docker', icon: <DockerIcon /> },
		{ label: 'Kubernets', icon: <KubernetsIcon /> },
		{ label: 'Garden', icon: <GardenIcon /> },
		{ label: 'Terraform', icon: <TerraformIcon /> },
		{ label: 'Github', icon: <GithubActionsIcon /> },
		{ label: 'Azure', icon: <AzureDevopsIcon /> },
		{ label: 'Jenkins', icon: <JenkinsIcon /> },
		{ label: 'Github', icon: <GithubIcon /> },
	],
	'Cloud Infrastructure': [
		{ label: 'Google', icon: <GoogleCloudIcon /> },
		{ label: 'AWS', icon: <AwsIcon /> },
		{ label: 'Azure', icon: <AzureIcon /> },
		{ label: 'Vercel', icon: <VercelIcon /> },
	],
	'Storage Systems': [
		{ label: 'Spark', icon: <SparkIcon /> },
		{ label: 'Postgresql', icon: <PostgresqlIcon /> },
		{ label: 'Neo4j', icon: <Neo4jIcon /> },
		{ label: 'Databricks', icon: <DatabricksIcon /> },
		{ label: 'Redis', icon: <RedisIcon /> },
		{ label: 'Airflow', icon: <AirflowIcon /> },
		{ label: 'MongoDb', icon: <MongodbIcon /> },
		{ label: 'Mysql', icon: <MySqlIcon /> },
	],
}

const Skills: React.FC<SkillsProps> = ({ className = '' }) => {
	const [selectedSkill, setSelectedSkill] = useState<SkillsType>('UI/UX Design')

	return (
		<div id='skills' className={`${className} flex flex-col w-full bg-black text-white min-h-screen`}>
			<p className='text-3xl font-medium text-center mb-16 mt-28'>Skills</p>
			<div className='grid grid-cols-2 justify-center max-w-6xl mx-auto w-full'>
				<div className='flex flex-col flex-1 text-xl'>
					{Object.keys(skills).map((key) => (
						<div key={key} className='my-6 flex'>
							<button
								onClick={() => setSelectedSkill(key as SkillsType)}
								className={`${
									selectedSkill === key && 'link-underline-active'
								} link link-underline font-light`}
							>
								{key}
							</button>
						</div>
					))}
				</div>
				<div className='flex x-8 justify-center'>
					<div className='grid grid-cols-4'>
						{skills[selectedSkill].map(({ label, icon }) => (
							<div
								key={label}
								className='flex h-24 w-24 items-center justify-center bg-gray-900 rounded m-8'
							>
								{icon}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
