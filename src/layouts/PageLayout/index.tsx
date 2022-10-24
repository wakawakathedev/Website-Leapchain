type Props = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: Props) => (
  <div className="px-4">{children}</div>
)