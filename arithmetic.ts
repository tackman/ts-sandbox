/**
 * TSの型で算術演算
 */

interface Nature {}

type Succ<N> = { op: N };
type Dec<N> = N extends { op: infer M } ? M : {};

type Zero = Succ<{}>;
type One = Succ<Zero>;
type Two = Succ<One>;
type DecTwo = Dec<Two>;
type DecDecTwo = Dec<Dec<Two>>;
type ShouldOne = Succ<DecDecTwo>;
type test = ShouldOne extends One ? true : false;
type test2 = One extends ShouldOne ? true : false;
type testFail = One extends Two ? true : false;
type testSuccess = Two extends One ? true : false;

type Eq<N, M> = N extends M ? (M extends N ? true : never) : never

type e1 = Eq<One, Two>
type e2 = Eq<One, ShouldOne>


