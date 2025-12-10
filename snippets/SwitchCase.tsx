type CaseType = {
  when?: boolean;
  isDefault?: boolean;
};

const Case = ({ children }: CaseType & { children: React.ReactNode }): React.ReactNode => {
  return children;
};

const Switch = ({ children }: { children: React.ReactElement<CaseType>[] }): React.ReactNode => {
  const defaultComponent = children.find((child) => child?.props?.isDefault);
  const resultComponent = children.find((child) => child?.props?.when);
  return resultComponent || defaultComponent;
};

// 사용법
function Page() {
  const user = useUser();

  return (
    <Switch>
      <Case when={user.role === "admin"}>
        <div>
          <Button disabled={false}>Invite</Button>
          <Button disabled={false}>Read</Button>
        </div>
      </Case>
      <Case when={user.role === "viewer"}>
        <div>
          <Button disabled={true}>Invite</Button>
          <Button disabled={false}>Read</Button>
        </div>
      </Case>
      <Case isDefault>{null}</Case>
    </Switch>
  );
}
