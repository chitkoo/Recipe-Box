import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Gmail = props => (
  <Svg
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    {...props}>
    <Path
      style={{
        fill: '#cfd8dc',
      }}
      d="m443.499 417.941-181.333-128a10.667 10.667 0 0 0-12.309 0l-181.333 128a10.667 10.667 0 0 0-4.523 8.725v10.667C64 443.224 68.776 448 74.667 448h362.667c5.891 0 10.667-4.776 10.667-10.667v-10.667a10.671 10.671 0 0 0-4.502-8.725z"
    />
    <Path
      style={{
        fill: '#fafafa',
      }}
      d="m262.165 289.941-181.333-128c-4.807-3.405-11.465-2.268-14.87 2.539A10.658 10.658 0 0 0 64 170.666v256c-.012 5.891 4.755 10.676 10.646 10.688a10.673 10.673 0 0 0 6.186-1.962l181.333-128c4.813-3.397 5.961-10.052 2.564-14.865a10.655 10.655 0 0 0-2.564-2.564v-.022z"
    />
    <Path
      style={{
        fill: '#eee',
      }}
      d="M442.24 161.195a10.796 10.796 0 0 0-11.072.747l-181.333 128c-4.813 3.397-5.961 10.052-2.564 14.865a10.655 10.655 0 0 0 2.564 2.564l181.333 128c4.807 3.405 11.465 2.268 14.87-2.539a10.661 10.661 0 0 0 1.962-6.165v-256c0-3.986-2.221-7.639-5.76-9.472z"
    />
    <Path
      style={{
        fill: '#eceff1',
      }}
      d="M468.8 71.339A10.666 10.666 0 0 0 458.667 64H53.333c-5.891 0-10.667 4.776-10.667 10.667 0 3.357 1.581 6.519 4.267 8.533L249.6 232.533a10.669 10.669 0 0 0 12.651 0L464.917 83.2a10.666 10.666 0 0 0 3.883-11.861z"
    />
    <Path
      style={{
        fill: '#f44336',
      }}
      d="M458.667 64a10.67 10.67 0 0 0-6.4 2.133L256 210.752 59.733 66.133a10.67 10.67 0 0 0-6.4-2.133C23.878 64 0 87.878 0 117.333v277.333C0 424.122 23.878 448 53.333 448h21.333c5.891 0 10.667-4.776 10.667-10.667v-246.08l164.501 116.139a10.667 10.667 0 0 0 12.309 0l164.523-116.139v246.08c0 5.891 4.776 10.667 10.667 10.667h21.333C488.122 448 512 424.122 512 394.667V117.333C512 87.878 488.122 64 458.667 64z"
    />
  </Svg>
);

export default Gmail;
