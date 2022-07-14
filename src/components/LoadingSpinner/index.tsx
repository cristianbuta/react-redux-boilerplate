import { Spinner, SpinnerContainer } from './index.styles'

interface ILoadingSpinner {
  size: string
  color?: string
  className?: string
}

const LoadingSpinner = (props: ILoadingSpinner) => {
  const { className, size, color } = props
  return (
    <SpinnerContainer>
      <Spinner className={className} color={color} size={size}></Spinner>
    </SpinnerContainer>
  )
}

export default LoadingSpinner
