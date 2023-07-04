import BuilderImage from './builder-image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <BuilderImage
          src={picture}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
