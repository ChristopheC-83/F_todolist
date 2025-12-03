import { View , Text, Image} from 'react-native';
import {s} from './TaskTile.style';

export default function TaskTile({task}) {
    return (
      <View style={s.container}>
        <View style={s.subContainer}>
          <Image
            source={require("../../../assets/icons/circle_black.png")}
            style={s.checkIcon}
          />
          <Text style={s.title}>{task.title}</Text>
        </View>
        <Image
          source={require("../../../assets/icons/bin_black.png")}
          style={s.BinIcon}
        />
      </View>
    );
};